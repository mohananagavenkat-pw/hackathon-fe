import { Dialog, Typography } from "@pwskills/rachnaui";
import { Checkmark, CopyOutline } from "@pwskills/rachnaui/Icons";
import { classNames, randomId } from "@pwskills/rachnaui/utils";
import React, { useState } from "react";
import { shareMedia } from "../../constants/ShareMedia";

const SocialShareModal = (props) => {
  const { url, modelOpen, setModelOpen } = props;
  const [linkCopied, setLinkCopied] = useState(false);

  const handleShare = async (service) => {
    try {
      switch (service) {
        case "whatsapp":
          window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
          break;
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`
          );
          break;
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
          );
          break;
        case "telegram":
          window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`);
          break;
        case "linkedin":
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url
            )}`
          );
          break;
        case "reddit":
          window.open(
            `https://www.reddit.com/submit?url=${encodeURIComponent(url)}`
          );
          break;
        default:
          throw new Error(`Invalid share service: ${service}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const copyTextToClipboard = async (clipboardText) => {
    try {
      await navigator.clipboard.writeText(clipboardText);
      setLinkCopied(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const renderShareMedia = () => {
    return shareMedia?.map(({ className, icon, text }) => (
      <div
        className="flex items-center flex-col gap-3"
        key={randomId()}
        onClick={() => handleShare(text.toLowerCase())}
        aria-hidden
      >
        <div
          className={classNames(
            "w-[52px] h-[52px] rounded-[50%] flex items-center justify-center cursor-pointer hover:shadow-dark",
            className
          )}
        >
          {icon}
        </div>
        <Typography
          component="body-small"
          variant="semi-bold"
          className=" text-stroke-400"
        >
          {text}
        </Typography>
      </div>
    ));
  };

  return (
    <Dialog
      open={modelOpen}
      closeModal={() => {
        setModelOpen(false);
        setLinkCopied(false);
      }}
      title="Share Link"
      isOutSideClick
      className="w-[90%] regular:!max-w-[464px]"
      titleWrapperClass="border-none"
    >
      <div>
        <div className="grid grid-cols-3 gap-y-9 mb-9 ">
          {renderShareMedia()}
        </div>
        <div className="flex flex-col gap-2">
          <Typography component="subheading" variant="bold">
            Page Link
          </Typography>
          <div className="bg-white flex justify-between items-center h-full w-full">
            <div className="py-[13px] px-[16px] border border-stroke-200 border-dashed !border-r-0 w-full rounded-lg rounded-r-none">
              {linkCopied ? (
                <Typography
                  component="body-small"
                  variant="regular"
                  className="text-green-500"
                >
                  Link Copied
                </Typography>
              ) : (
                <Typography
                  component="body-small"
                  variant="regular"
                  className="break-all line-clamp-1"
                >
                  {url}
                </Typography>
              )}
            </div>

            {linkCopied ? (
              <div className="bg-green-50 py-[15px] px-[16px] rounded-r-lg -ml-2">
                <Checkmark className="h-full w-5 cursor-pointer text-green-400" />
              </div>
            ) : (
              <div className="bg-orange-50 py-[15px] px-[16px] rounded-r-lg -ml-2">
                <CopyOutline
                  className="h-full w-5 text-orange-500 cursor-pointer "
                  onClick={() => {
                    copyTextToClipboard(url);
                    setLinkCopied(true);
                    setTimeout(() => {
                      setLinkCopied(false);
                    }, 1000);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SocialShareModal;
