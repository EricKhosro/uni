import allinLogo from "../Assets/Images/allinLogo.png";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 h-16 w-full flex flex-row justify-center items-center bg-white z-[999999] gap-[23px] border-[1px] border-opacity-0.08 shadow-effect2">
      <div className="title-small">
        ارائه شده توسط شرکت پیشرو فن آوران{" "}
        <a
          href="https://allingroup.ir/"
          target="_blank"
          className="text-red-02 underline underline-offset-[6px]"
        >
          آلین کیش
        </a>
      </div>
      <img src={allinLogo} className="w-[58px] h-[41px]" />
    </div>
  );
};

export default Footer;
