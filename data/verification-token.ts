import db from "@/utils/db";

export const getVerificationEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { email },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { token },
    });
    return verificationToken;
  } catch {
    return null;
  }
};
