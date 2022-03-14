import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import { getFindProductId } from "./product";

export const helpersPostOrder = async (props: any) => {
  let { Items, Status, UserId } = props;
  try {
    let amount = 0;
    let OrderDetailId: {}[] = [];
    await Items.map(async (item: any) => {
      let FindProductId: any = await getFindProductId(item.id);
      amount = amount + FindProductId.price * item.quantity;
      let detailId = await prisma.order_detail.create({
        data: {
          productId: item.id,
          quantity: item.quantity,
          price: FindProductId.price,
        },
      });
      OrderDetailId.push({ id: detailId.id });
    });

    let newOrder = await prisma.order.create({
      data: {
        UserId: UserId,
        status_pay: "INCART",
      },
    });

    await prisma.order.update({
      where: { id: newOrder.id },
      data: { amount: amount },
    });

    await prisma.order.update({
      where: { id: newOrder.id },
      data: { Order_detail: { connect: OrderDetailId } }, ///[{id:2},{id:15}]
    });

    return newOrder
  } catch (error) {
    console.error(error);
  }
};
