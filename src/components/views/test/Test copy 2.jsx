import React, { lazy, Suspense } from "react";

const AvatarComponent = lazy(() =>
  import("../../../redux/_actions/post_action")
);
const InfoComponent = lazy(() => import("../commnunity/General"));
const MoreInfoComponent = lazy(() =>
  import("../../../redux/_actions/mapNav/location_action")
);

const renderLoader = () => <p>Loading</p>;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}
const DetailsComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={renderLoader()}>
      {/* <AvatarComponent /> */}
      {/* <InfoComponent /> */}
      {/* <MoreInfoComponent /> */}
    </Suspense>
  </ErrorBoundary>
);

export default DetailsComponent;
