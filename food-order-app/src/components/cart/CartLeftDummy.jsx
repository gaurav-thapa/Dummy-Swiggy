export default function CartLeftDummy() {
  return (
    <div className="basis-1/2 flex flex-col gap-6">
      <div className="p-5 shadow-lg rounded">
        <div className="font-bold">Account</div>
        <div>
          To place your order now, log in to your existing account or sign up.
        </div>
        <div className="flex gap-4 my-5 font-bold">
          <button className="rounded-lg p-2 border-2 border-green-400 text-green-400">
            <div>Have an Account?</div>
            <div>Log In</div>{" "}
          </button>
          <button className="rounded-lg p-2 border-2 border-green-400 bg-green-400 text-white">
            <div>New to Foodie&apos;s Place?</div> <div>Sign Up</div>
          </button>
        </div>
      </div>
      <div className="p-5 shadow-lg rounded">Delivery Address</div>
      <div className="p-5 shadow-lg rounded">Payment</div>
    </div>
  );
}
