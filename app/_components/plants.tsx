import React from 'react';
import { ArrowRight, GitPullRequest, Leaf, TreePine } from 'lucide-react';
import PlayAnimation from './plantAnimation';
const ContributeNature = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 sm:space-y-8 py-4 sm:py-6 md:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold font-mokoto tracking-wider text-yellow-500">
            CONTRIBUTE FOR NATURE
          </h1>

          {/* Decorative Center Icon */}
          <PlayAnimation />
        </div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Info Box */}
          <div className="border border-yellow-500/50 rounded-lg p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 backdrop-blur-sm max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-mokoto text-yellow-500 text-center">
              Make Your Code Green: Contribute For Nature 🌱
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-center">
              Join us in making a real-world impact through open source! During Apertre 2.0, every 5 pull requests you
              contribute will result in planting a tree. Transform your code contributions into environmental action.
            </p>
          </div>

          {/* How It Works Section */}
          <div className="py-4 sm:py-6 lg:py-8">
            <h3 className="text-lg sm:text-xl font-bold font-mokoto text-yellow-500 mb-6 sm:mb-8 lg:mb-12 text-center">
              How It Works:
            </h3>

            {/* Container for cards - switches between column and row layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
              {/* Step 1 */}
              <div className="w-full sm:w-4/5 lg:w-1/3 p-4 sm:p-6 rounded-lg border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent">
                <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                  <GitPullRequest className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <p className="text-sm sm:text-base">Submit pull requests to participating repositories</p>
                </div>
              </div>

              {/* Arrow 1 - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
              </div>

              {/* Step 2 */}
              <div className="w-full sm:w-4/5 lg:w-1/3 p-4 sm:p-6 rounded-lg border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent">
                <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                  <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <p className="text-sm sm:text-base">For every 5 PRs merged, we plant one tree</p>
                </div>
              </div>

              {/* Arrow 2 - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
              </div>

              {/* Step 3 */}
              <div className="w-full sm:w-4/5 lg:w-1/3 p-4 sm:p-6 rounded-lg border border-green-500/30 bg-gradient-to-b from-green-500/10 to-transparent">
                <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                  <p className="text-sm sm:text-base">Watch your digital footprint turn into a green footprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeNature;