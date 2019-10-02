import { vxm } from "@/store/store";

export default async ({ redirect }: any): Promise<any> => {
  if (vxm.user.signedIn) {
    return;
  }
  await vxm.user.fetchSignedIn();
  if (vxm.user.signedIn === false) {
    redirect("/signin");
  }
};
