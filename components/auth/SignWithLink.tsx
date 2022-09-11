export function SignWithLink({
  email,
  setEmail,
  handleSignIn,
}: {
  handleSignIn: () => void
  email: string
  setEmail: (email: string) => void
}) {
  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Email"
        className="focus:outline-none focus:border-transparent w-full rounded-lg py-2 pl-10 pr-3 text-gray-700 focus:ring-2 focus:ring-gray-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignIn}>Send Magic link</button>
    </form>
  )
}
