import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import ProfilePicture from "../../components/ProfilePicture";

export default () => {
  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Profile",
            href: "",
          },
        ]}
      />
      <div className="relative overflow-x-auto">
        <h1 className="text-gray-900 dark:text-gray-200 text-xl font-bold mb-2">
          Profile
        </h1>

        <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="mb-4 md:flex md:justify-between">
            <ProfilePicture alt="Profile picture" />

            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white dark:bg-gray-800"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                className="bg-white dark:bg-gray-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full px-3 py-2 mb-3"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white dark:bg-gray-800"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                className="bg-white dark:bg-gray-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full px-3 py-2 mb-3"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700 dark:text-white dark:bg-gray-800"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="bg-white dark:bg-gray-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full px-3 py-2 mb-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Template>
  );
};
