const Education = () => {
  return (
    <div className="p-6 text-white my-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education Journey
          </span>
        </h2>

        <div className="relative group">
          {/* Card */}
          <div
            className="relative rounded-xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
            style={{
              background:
                "linear-gradient(145deg, rgba(45,45,45,0.9), rgba(25,25,25,0.9))",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-2xl mb-4">
              BS Computer Science
            </h3>
            <div className="space-y-2">
              <p className="text-blue-400 text-lg">
                National University of Sciences and Technology
              </p>
              <p className="text-green-400 text-lg">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
