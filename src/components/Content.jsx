/* eslint-disable react/prop-types */
const Content = ({ children }) => {
  return (
    <>
      <main className="h-[calc(100vh-10rem)] overflow-auto mx-auto max-w-screen-lg px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
export default Content