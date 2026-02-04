import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickInfoSection from "@/components/home/QuickInfoSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import SchedulePreview from "@/components/home/SchedulePreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickInfoSection />
      <WelcomeSection />
      <SchedulePreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
