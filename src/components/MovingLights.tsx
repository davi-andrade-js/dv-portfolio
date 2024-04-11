export default function MovingLights() {
  return (
    <div className="motion-area ease m-[20px] h-[91vh] justify-center rounded-xl lg:m-[32px]">
      <div className="bg-shape1 light-one bg-blur absolute h-[800px] w-[800px] rounded-full opacity-50"></div>
      <div className="bg-shape2 light-two bg-blur absolute h-[800px] w-[800px] rounded-full opacity-50"></div>
    </div>
  );
}
