"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { redirect } from "next/navigation";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});
export const subscribeEmail = async (formData: FormData) => {
  const email = formData.get("email");
  try {
    await mailchimp.lists.addListMember(process.env.AUDIENCE_ID as string, {
      email_address: email as string,
      status: "subscribed",
    });
  } catch (error) {
    return { message: "A problem" };
  }
  redirect("/?message=Thank for subscribing&error=false");
};
