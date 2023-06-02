import { useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { LinePayImg } from "../../../../pages/OrderDetail";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { SectionTitle } from "../payment-form/PaymentForm.style";
import { countries } from "src/data/countries";
import { getValidationData } from "./getValidationData";
import Select from "src/components/Product/Select";
import FieldErr from "src/components/error/FieldErr";
import * as SC from "./ShippingForm.style";
import PaymentForm from "../PaymentForm";
import { PayBtn } from "../payment-form/PaymentForm.style";
import { payWithCreditCard, payWithLinePay } from "src/api/user.api";
import toast from "react-hot-toast";
import { commonActions } from "../../../../store/slice/Common.slice";
import { cartActions } from "../../../../store/slice/Cart.slice";
import { checkoutActions } from "../../../../store/slice/Checkout.slice";
import linepay from "src/assets/order/linepay_png.png";

interface FormValue {
  first_name: string;
  last_name: string;
  address: string;
  state: string;
  zip: number;
}

const ShippingForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cartList, cartId } = useAppSelector((state) => state.cart || {});
  const { total, shipping, discount_total, discount, discount_code } =
    useAppSelector((state) => state.checkout);
  const { locale, id } = useAppSelector((state) => state.user || {});
  const [userLocale, setUserLocale] = useState("");
  const [curBtnName, setCurBtnName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    userLocale || "Taiwan"
  );
  const [active, setActive] = useState(false);
  const haveUsedCoupon = () => discount !== 0;
  const createOrderHandler = async (info: FormValue, type: string) => {
    try {
      // dispatch(commonActions.setLoading(true));
      if (type === "linepay") {
        const {
          data: { url },
        }: { data: { url: string } } = await payWithLinePay({
          cart_id: cartId,
          owner_id: id!,
          order_items: cartList,
          receiver_name: `${info.first_name} ${info.last_name}`,
          delivery_address: `${info.zip} ${selectedCountry} ${info.state} ${info.address}`,
          shipping,
          total,
          discount_total,
          discount,
          discount_code,
        });
        // dispatch(commonActions.setLoading(false));
        window.location.href = url;
      } else {
        await payWithCreditCard({
          cart_id: cartId,
          owner_id: id!,
          order_items: cartList,
          receiver_name: `${info.first_name} ${info.last_name}`,
          delivery_address: `${info.zip} ${selectedCountry} ${info.state} ${info.address}`,
          shipping,
          total, //就是subtotal
          discount_total, //打完折的總價
          discount,
          discount_code,
        });
        dispatch(cartActions.resetCartLength());
        dispatch(checkoutActions.clearInfo());
        navigate("/checkout/order-complete", {
          replace: true,
        });
      }
    } catch (error) {
      // dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const handleActive = () => {
    setActive(!active);
  };
  const handleSetCountry = (params: { name: string }) => {
    if (params.name) {
      setSelectedCountry(params.name);
      setActive(false);
    }
  };

  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = async (data, event) => {
    const formElement = event?.target as HTMLFormElement;
    // const btnName = formElement.getElementsByTagName("button")[1].name;
    console.log(curBtnName, "當前名稱");
    await createOrderHandler(data, curBtnName);
    console.log(errors);
  };

  useEffect(() => {
    dispatch(checkoutActions.setDiscount(0));
  }, []);

  useEffect(() => {
    if (locale) {
      const convertedLocale = countries.find(
        (item) => item.val.split("-")[1] === locale
      )?.name;
      setUserLocale(convertedLocale!);
    }
  }, [locale]);

  return (
    <SC.ShippingContainer>
      <FormProvider {...methods}>
        <SectionTitle>SHIPPING ADDRESS</SectionTitle>
        <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <SC.RowFlexBox>
            <SC.LeftInputBox>
              <SC.Label error={errors.first_name}>First Name</SC.Label>
              <SC.Input
                error={errors.first_name}
                {...register(
                  "first_name",
                  getValidationData(["maxLength", "required", "alphabetical"])
                )}
              />
              <FieldErr errors={errors} field="first_name" />
            </SC.LeftInputBox>

            <SC.RightInputBox>
              <SC.Label error={errors.last_name}>Last Name</SC.Label>
              <SC.Input
                error={errors.last_name}
                {...register(
                  "last_name",
                  getValidationData(["required", "alphabetical"])
                )}
              />
              <FieldErr errors={errors} field="last_name" />
            </SC.RightInputBox>
          </SC.RowFlexBox>
          <SC.SingleInputBox>
            <SC.Label>Country</SC.Label>
            <Select
              fullWidth={true}
              needScroll={true}
              listData={countries}
              handleSetSelected={handleSetCountry}
              handleActive={handleActive}
              selectedName={selectedCountry!}
              active={active}
            />
          </SC.SingleInputBox>
          <SC.SingleInputBox>
            <SC.Label>Address</SC.Label>
            <SC.Input
              error={errors.address}
              {...register("address", getValidationData(["required"]))}
            />
            <FieldErr errors={errors} field="address" />
          </SC.SingleInputBox>
          <SC.RowFlexBox>
            <SC.LeftInputBox>
              <SC.Label error={errors.state}>State/County</SC.Label>
              <SC.Input
                error={errors.state}
                {...register(
                  "state",
                  getValidationData(["required", "alphabetical"])
                )}
              />
              <FieldErr errors={errors} field="state" />
            </SC.LeftInputBox>
            <SC.RightInputBox>
              <SC.Label error={errors.zip}>Zip code</SC.Label>
              <SC.Input
                maxLength={8}
                error={errors.zip}
                {...register("zip", getValidationData(["required", "numeric"]))}
              />
              <FieldErr errors={errors} field="zip" />
            </SC.RightInputBox>
          </SC.RowFlexBox>
          <SectionTitle>Payment Info</SectionTitle>
          <PaymentForm />
          <PayBtn
            name="card"
            onClick={() => {
              setCurBtnName("card");
            }}
          >
            Pay with credit card
          </PayBtn>
          {!haveUsedCoupon() && (
            <SC.LinePayBtn
              name="linepay"
              onClick={() => {
                setCurBtnName("linepay");
              }}
            >
              <LinePayImg src={linepay} />
            </SC.LinePayBtn>
          )}
        </SC.FormContainer>
      </FormProvider>
    </SC.ShippingContainer>
  );
};

export default ShippingForm;
