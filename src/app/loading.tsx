export default function Loading() {
  return (
    <div className="absolute inset-0 my-16 grid place-content-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
    </div>
  );
}