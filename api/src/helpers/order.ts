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
    // let amount = 0;
    let newOrder = await order.create({
      data: {
        UserId,
        status_pay: "INCART",
      },
    });
    const promesa = await Promise.all([
      Items.map(async (item: any) => {
        let FindProductId: any = await getFindProductId(item.id);
        // amount = amount + FindProductId.price * item.quantity;
        await order_detail.create({
          data: {
            OrderId: newOrder.id,
            productId: item.id,
            quantity: item.quantity,
            price: FindProductId.price,
            subtotal: FindProductId.price * item.quantity,
          },
        });
        let sumAmount = await order_detail.groupBy({
          by: ["OrderId"],
          where: {
            OrderId: newOrder?.id,
          },
          _sum: { subtotal: true },
        });

        await order.update({
          where: { id: newOrder?.id },
          data: { amount: sumAmount[0]._sum.subtotal },
        });
      }),
    ]);
    return newOrder;
  } catch (error) {
    console.error(error);
  }
};

export const helpersUpQuantity = async (props: any) => {
  let { idUser, Items } = props;

  try {
    if (idUser) {
      let findUserOrder = await order.findFirst({
        where: { UserId: idUser },
        include: { Order_detail: true },
      });
      const promesa2 = await Promise.all([
        Items.map(async (item: any) => {
          findUserOrder?.Order_detail.map(async (product: any) => {
            if (product.productId == item.id) {
              let precio = item.quantity * product.price;
              await order_detail.update({
                where: { id: product.id },
                data: { quantity: item.quantity },
              });
              await order_detail.update({
                where: { id: product.id },
                data: { subtotal: precio },
              });
              let sumAmount = await order_detail.groupBy({
                by: ["OrderId"],
                where: {
                  OrderId: findUserOrder?.id,
                },
                _sum: { subtotal: true },
              });

              await order.update({
                where: { id: findUserOrder?.id },
                data: { amount: sumAmount[0]._sum.subtotal },
              });
            }
          });
        }),
      ]);
      return findUserOrder;
    }
  } catch (error) {
    console.error(error);
  }
};

export const helpersdeleteProduct = async (props: any) => {
  const { idUser, idProduct }: any = props;
  try {
    let findUserOrder = await order.findFirst({
      where: { UserId: idUser },
      include: { Order_detail: true },
    });
    let findProduct = findUserOrder?.Order_detail.map(
      async (orderDetail: any) => {
        orderDetail.productId == idProduct
          ? await order_detail.delete({ where: { id: orderDetail.id } })
          : null;
        let sumAmount = await order_detail.groupBy({
          by: ["OrderId"],
          where: {
            OrderId: findUserOrder?.id,
          },
          _sum: { subtotal: true },
        });

        await order.update({
          where: { id: findUserOrder?.id },
          data: { amount: sumAmount[0]._sum.subtotal },
        });
      }
    );
    return findProduct;
  } catch (error) {
    console.error(error);
  }
};

export const helpersInsertProduct = async (props: any) => {
  const { idUser, item } = props;
  try {
    let findUserOrder = await order.findFirst({
      where: { UserId: idUser, status_pay: "INCART" },
      include: { Order_detail: true },
    });
    let FindProductId: any = await getFindProductId(item.id);
    let newOrderDetail = await order_detail.create({
      data: {
        OrderId: findUserOrder?.id,
        productId: item.id,
        quantity: item.quantity,
        price: FindProductId.price,
        subtotal: FindProductId.price * item.quantity,
      },
    });

    let sumAmount = await order_detail.groupBy({
      by: ["OrderId"],
      where: {
        OrderId: findUserOrder?.id,
      },
      _sum: { subtotal: true },
    });

    await order.update({
      where: { id: findUserOrder?.id },
      data: { amount: sumAmount[0]._sum.subtotal },
    });

    return newOrderDetail;
  } catch (error) {
    console.error(error);
  }
};

export const helpersStatusIncart = async (props: any) => {
  const { idUser } = props;
  try {
    let findUserOrder = await order.findFirst({
      where: { UserId: idUser, status_pay: "INCART" },
      include: { Order_detail: true },
    });

    return findUserOrder;
  } catch (error) {
    console.error(error);
  }
};

export const helpersAllOrder = async () => {
  try {
    let allOrder = await order.findMany({ include: { Order_detail: true } });
    return allOrder;
  } catch (error) {
    console.error(error);
  }
};

export const helpersOneStatusAllOrder = async (props: any) => {
  const { status } = props;
  try {
    let allOrderStatus = await order.findMany({
      where: { status_order: status },
      include: { Order_detail: true },
    });
    return allOrderStatus;
  } catch (error) {
    console.error(error);
  }
};

export const helpersUpStatus = async (props: any) => {
  const { idOrder, status } = props;
  try {
    let findOrderId = await order.findUnique({ where: { id: idOrder } });
    let allStatusSet = await order.update({
      where: { id: idOrder },
      data: { status_order: status },
    });

    return allStatusSet;
  } catch (error) {
    console.error(error);
  }
};
