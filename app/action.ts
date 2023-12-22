"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { redirect } from "next/navigation";

export const subscribeEmail = async (formData: FormData) => {
  const email = formData.get("email");
  try {
    await mailchimp.lists.addListMember(process.env.AUDIENCE_ID as string, {
      email_address: email as string,
      status: "subscribed",
    });
    redirect("/?message=Could not authenticate user&error=false");
  } catch (error) {
    redirect("/?message=Could not authenticate user&error=true");
  }
};
