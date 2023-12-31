import { IconBrandVscode, IconDisc } from "@tabler/icons-react";
import React from "react";
import type { StreamingData } from "../types/api";

interface Props {
  streaming: StreamingData;
  presence: any;
}

interface RenderedActivity {
  text: string;
  color: string;
  icon?: React.ComponentType<any>;
  class?: string;
}

const FooterActivity: React.FC<Props> = ({ streaming, presence }) => {
  const getStreamingActivity = (
    streamingData: StreamingData,
  ): RenderedActivity => {
    return {
      text: `Listening to ${streamingData.streaming!.track} by ${
        streamingData.streaming!.artist
      }`,
      icon: IconDisc,
      class: "animate-[spin_3s_linear_infinite]",
      color: "text-green-10",
    };
  };

  // Uncomment if you need this function in the future
  const getCodingActivity = (presenceData: any): RenderedActivity => {
    return {
      text: presenceData.coding.state ? presenceData.coding.state : "",
      icon: IconBrandVscode,
      color: "text-blue-11",
    };
  };

  const getDefaultActivity = (): RenderedActivity => {
    return {
      color: "",
      text: "",
    };
  };

  const renderedActivity: RenderedActivity = streaming.streaming
    ? getStreamingActivity(streaming)
    : presence.coding
    ? getCodingActivity(presence)
    : getDefaultActivity();

  return (
    <span className={`${renderedActivity.color} flex items-center gap-1`}>
      {renderedActivity.icon && (
        <renderedActivity.icon size={20} className={renderedActivity.class} />
      )}
      {renderedActivity.text && <span>{renderedActivity.text}</span>}
    </span>
  );
};

export default FooterActivity;
