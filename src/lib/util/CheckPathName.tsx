import {
  KEYWORDS_PATH,
  MAILBOXL_DETAIL_PATH,
  MAILBOX_PATH,
  MAILSCAN_PATH,
  MAILUPLOAD_PATH,
  MAIN_PATH,
  MATERIAL_DETAIL_PATH,
  MATERIAL_PATH,
  ORIGINALIMAGE_PATH,
  PRINT_PATH,
} from "../constants/pathname";

export const checkPathname = (pathname: string) => {
  const originalImage = ORIGINALIMAGE_PATH.test(pathname);
  const print = PRINT_PATH.test(pathname);
  const keywords = KEYWORDS_PATH.test(pathname);
  const materialDetail = MATERIAL_DETAIL_PATH.test(pathname);
  const mailboxDetail = MAILBOXL_DETAIL_PATH.test(pathname);

  const sendmailPaths = [MAILSCAN_PATH, MAILUPLOAD_PATH];
  const userHeaderGroup = [MAIN_PATH, MAILBOX_PATH, MATERIAL_PATH];

  const isSendmailPath = sendmailPaths.includes(pathname);
  const isUserHeader = userHeaderGroup.includes(pathname);

  return { originalImage, print, keywords, mailboxDetail, materialDetail, isSendmailPath, isUserHeader };
};

function CheckPathName() {
  return null;
}

export default CheckPathName;
