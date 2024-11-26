export default function Form() {
    return (
      <section className="py-8">
        <div> <h1 className="bg-red-800 h-30 py-8 text-white font-bold text-xl pl-7">Application Form</h1></div>
        <div className="container mx-auto">
          <form className="bg-white p-8 rounded shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded" />
              <input type="text" placeholder="Position" className="border p-2 rounded" />
              <input type="text" placeholder="Salary" className="border p-2 rounded" />
            </div>
                {/* Gender Selection */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">Gender:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-red-800 border-gray-300 "
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-red-800 border-gray-300"
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>

            <div className="mt-4">
              <textarea
                placeholder="Additional Message"
                className="w-full border p-2 rounded"
                
              ></textarea>
            </div>
            <button className="mt-4 bg-red-800 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </div>
      </section>
    );
  }
  