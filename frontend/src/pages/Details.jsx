export function Details() {
  const isAuthenticated = true;

  return (
    <div>
      {isAuthenticated ? "Logged in" : ""}
    </div>
  )
}