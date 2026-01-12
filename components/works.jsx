import Bcard from "./card/Bcard";

const Works = () => {
  return (
    <section className="xl:mx-24 mx-6 sm:mx-10 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Selected Projects
          </p>
          <h1 className="mt-2 text-4xl font-bold font-title sm:text-5xl">
            My Works
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            A curated set of product, AI, and design-driven projects that show
            end-to-end execution, thoughtful UX, and measurable impact.
          </p>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Portfolio
          </span>
          <span className="h-px w-14 bg-slate-200" />
        </div>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Bcard
          src={"/images/22.png"}
          title={"Calorify – AI Food Recognition & Gamified Calorie Tracking"}
          company={"Apple Developer Academy"}
          stack={["Python", "Swift", "Core ML", "iOS", "TensorFlow", "CNN"]}
          desk={
            "Calorify is an AI-powered iOS application that automatically detects food items from the user’s camera and estimates their nutritional values—such as calories, protein, fat, and carbohydrates. The app combines real-time food recognition with a gamification system inspired by the Octalysis Framework, enabling users to maintain or adjust their weight more consistently through XP, streaks, and daily challenges. The goal is to make calorie tracking both accurate and engaging."
          }
        />
        <Bcard
          src={"/images/skinalyze_appstore.png"}
          title={"Skinalyze – AI-Powered Acne Detection & Severity Assessment"}
          company={"Apple Developer Academy"}
          stack={["Python", "Swift", "Core ML", "iOS", "TensorFlow", "CNN"]}
          desk={
            "Skinalyze is an AI-driven mobile application designed to analyze facial acne conditions and estimate their severity directly from the user’s selfie. I was responsible for designing and developing the complete machine-learning pipeline—from dataset preparation, model experimentation, and evaluation—through integrating the final model into a production-ready iOS application. The project aims to help users monitor skin health and receive personalized insights based on real-time visual analysis."
          }
        />
        <Bcard
          src={"/images/bloomy.png"}
          title={"Bloomy : Blue Economy"}
          company={"Google Bangkit"}
          stack={["Kotlin", "Flask", "Google Cloud", "TensorFlow", "ML"]}
          desk={
            "In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence."
          }
        />
        <Bcard
          src={"/images/enfu.png"}
          title={"Enfution : UNDIP Website"}
          company={"Universitas Diponegoro"}
          stack={["Next.js", "Tailwind", "TypeScript", "Laravel", "MySQL"]}
          desk={
            "In the colorful world of manhwa, there exists a character with vibrant green hair, a hue that reflects his enigmatic nature and untamed spirit. His emerald locks cascade around his face like tendrils of ivy, adding an air of mystique to his presence."
          }
        />
      </div>
    </section>
  );
};

export default Works;
