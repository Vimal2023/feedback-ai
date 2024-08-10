import {resend} from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail.tsx";

import {ApiResponse} from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'feedback message | Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: 'Verification email send successfully'}

    } catch(error){
        console.error("Error sending verification email",emailError);
        return{success: false, message: 'Failed to send verification email'};
    }
}