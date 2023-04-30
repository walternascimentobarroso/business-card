import BusinessCard from "../../components/BusinessCard";

export default () => {
  const data = {
    email: "john.doe@example.com",
    phone: "(555) 555-5555",
    address: "123 Main St, AnyTown ssss",
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-900">
      <BusinessCard
        name="John Doe"
        jobTitle="Full Stack Developer"
        photoUrl="https://avatars.githubusercontent.com/u/8291055?v=4"
        data={data}
      />
    </div>
  );
};
