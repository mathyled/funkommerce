import { PrismaClient } from "@prisma/client";
const { order, order_detail } = new PrismaClient();
import { getFindProductId } from "./product";

export const helpersDeleteOrder = async (props: any) => {
  let { idUser }: any = props;
  try {
    let findOrder = await order.findFirst({
      where: { UserId: idUser },
      include: { Order_detail: true },
    });

    let deleteOrderDetail = findOrder?.Order_detail.map(
      async (item) => await order_detail.delete({ where: { id: item.id } })
    );

    let deleteOrder = await order.delete({ where: { id: findOrder?.id } });

    findOrder ? findOrder : [];
  } catch (error) {
    console.error(error);
  }
};

export const helpersAllOrderIncart = async (props: any) => {
  let { idUser }: any = props;
  try {
    let findOrderStatus = await order.findFirst({
      where: {
        UserId: idUser,
      },
      include: { Order_detail: true },
    });
    if (findOrderStatus?.status_pay == "INCART") {
      return findOrderStatus;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const helpersPostOrderAll = async (props: any) => {
  let { Items, UserId } = props;
  try {
    let amount = 0;
    let newOrder = await order.create({
      data: {
        UserId,
        status_pay: "INCART",
      },
    });
    const promesa = await Promise.all([
      Items.map(async (item: any) => {
        let FindProductId: any = await getFindProductId(item.id);
        amount = amount + FindProductId.price * item.quantity;
        await order_detail.create({
          data: {
            OrderId: newOrder.id,
            productId: item.id,
            quantity: item.quantity,
            price: FindProductId.price,
            subtotal: FindProductId.price * item.quantity,
          },
        });
        await order.update({
          where: { id: newOrder.id },
          data: { amount: amount },
        });
      }),
    ]);
    return newOrder
  } catch (error) {
    console.error(error);
  }
};




