import React from "react";

// 无论是在组件内部使用 useContext 还是在上层传入参数，都可以
// 分为两种情况：1 React.memo 处理组件 2 useMemo 处理依赖，缓存组件
export default React.memo(function Profile({
  profile,
}: {
  profile: {
    name: string;
    age: number;
  };
}) {
  console.log("render profile component!");
  return (
    <div>
      {profile?.name}, {profile?.age} years old.
    </div>
  );
});
