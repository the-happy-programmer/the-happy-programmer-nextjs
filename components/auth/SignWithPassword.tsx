import type { SigninWithEmailPasswordProps } from '../../lib/types/signin'

export function SignWithLink({
  email,
  setEmail,
  password,
  setPassword,
  handleSignIn,
}: SigninWithEmailPasswordProps) {
  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Email"
        className="focus:outline-none focus:border-transparent w-full rounded-lg py-2 pl-10 pr-3 text-gray-700 focus:ring-2 focus:ring-gray-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="focus:outline-none focus:border-transparent w-full rounded-lg py-2 pl-10 pr-3 text-gray-700 focus:ring-2 focus:ring-gray-600"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </form>
  )
}
