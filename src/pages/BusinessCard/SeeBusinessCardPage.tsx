import BusinessCard from "../../components/BusinessCard";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-900">
      <BusinessCard
        name="John Doe"
        jobTitle="Front-end Developer"
        email="john.doe@example.com"
        phone="(555) 555-5555"
        photoUrl="https://avatars.githubusercontent.com/u/8291055?v=4"
        //  address="123 Main St, Anytown ssss"
      />
    </div>
  );
};
