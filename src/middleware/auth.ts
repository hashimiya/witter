import { Auth } from 'aws-amplify'

export default async ({ redirect }: any): Promise<any> => {
  let signedIn = false
  await Auth.currentUserInfo()
    .then(data => (signedIn = Boolean(data)))
    .then(() => signedIn || redirect('/signin'))
}
