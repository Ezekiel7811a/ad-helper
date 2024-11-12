"use client";

import dynamic from "next/dynamic";
import { ComponentType, useEffect, useState } from "react";
const TestPage = () => {
  const dynamicNodePath = "signal/meg/nmm/nmm.tsx";
  const DefaultDynamic = () => <div>Loading ...</div>;
  const [DynamicComponent, setDynamicComponent] = useState<ComponentType>(
    () => DefaultDynamic
  );
  useEffect(() => {
    const loadDynamicComponent = async () => {
      const DynamicComponent = dynamic(
        () =>
          import(`@/app/components/nodes/${dynamicNodePath}`).then(
            (module) => module.Wrapper
          ),
        {
          ssr: false,
        }
      );
      setDynamicComponent(() => DynamicComponent);
    };
    if (dynamicNodePath) {
      loadDynamicComponent();
    }
  }, [dynamicNodePath]);
  return <DynamicComponent />;
};

export default TestPage;
