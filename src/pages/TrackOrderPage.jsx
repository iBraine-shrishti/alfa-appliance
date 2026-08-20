import Container from "../components/common/Container";
import TrackOrderTab from "../components/profile-tabs/TrackOrderTab";

const TrackOrderPage = () => {
  return (
    <div className="min-h-screen bg-navy-900/[0.02] py-8 lg:py-12">
      <Container>
        <main className="mx-auto max-w-5xl">
          <TrackOrderTab />
        </main>
      </Container>
    </div>
  );
};

export default TrackOrderPage;