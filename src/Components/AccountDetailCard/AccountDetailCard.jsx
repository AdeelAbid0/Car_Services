const AccountDetailCard = ({ icon, image, children }) => {
  return (
    <div className="flex w-full gap-6 bg-background p-4 relative rounded-xl">
      <div className="flex w-11 h-11 justify-center items-center rounded-lg bg-white">
        {icon}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
      <div className="absolute right-0 bottom-0">{image}</div>
    </div>
  );
};

export default AccountDetailCard;
