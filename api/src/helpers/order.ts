import { PrismaClient } from "@prisma/client";
const { order, order_detail } = new PrismaClient();
import { getFindProductId } from "./product";

export const helpersPostOrder = async (props: any) => {
  let { Items, UserId } = props;
  try {
    let amount = 0;
    let OrderDetailId: {}[] = [];
    await Items.map(async (item: any) => {
      let FindProductId: any = await getFindProductId(item.id);
      amount = amount + FindProductId.price * item.quantity;
      let detailId = await order_detail.create({
        data: {
          productId: item.id,
          quantity: item.quantity,
          price: FindProductId.price,
        },
      });
      OrderDetailId.push({ id: detailId.id });
    });

    let newOrder = await order.create({
      data: {
        UserId: UserId,
        status_pay: "INCART",
      },
    });

    await order.update({
      where: { id: newOrder.id },
      data: { amount: amount },
    });

    await order.update({
      where: { id: newOrder.id },
      data: { Order_detail: { connect: OrderDetailId } }, ///[{id:2},{id:15}]
    });

    return newOrder;
  } catch (error) {
    console.error(error);
  }
};

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

export const helpersgetAllOrderIncart = async (props: any) => {
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

export const updateOrderDetailsQuantity = async (props: any) => {
  let { UserID, idProduct, Quantity } = props;
  let findOrderUser = await order.findFirst({
    where: { UserId: UserID },
    include: { Order_detail: true },
  });
  console.log(findOrderUser?.Order_detail);

  console.log(findOrderUser);
};
