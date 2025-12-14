export const signupBodyPick = [
  "user_email",
  "user_name",
  // "user_isActive",
  "user_phone",
  "user_role",
  "user_password",
];

export const serviceGarmentPriceBodyPick = [
  "customer_id",
  "service_id",
  "garment_id",
  "quantity",
  "status",
];

export const orderBodyPick = [
  "customer_id",
  "availability_status",
  "return_expected_by",
  "quantity",
  "status",
];

export const orderItemBodyPick = [
  "customer_id",
  "availability_status",
  "order_id",
  "garment_id",
  "return_expected_by",
  "quantity",
  "status",
];

export const customerBodyPick = [
  "customer_name",
  "customer_phone",
  "customer_email",
  "customer_addr",
  "user_id",
];

export const garmentBodyPick = ["garment_name", "description"];

export const paymentBodyPick = [
  "billId",
  "amount",
  "method",
  "reference",
  "paidAt",
];

export const servicesBodyPick = ["service_name", "garment_id"];
