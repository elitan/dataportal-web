/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MediaBlock
// ====================================================

export interface MediaBlock_media_dataportal_Digg_Image {
  __typename: "dataportal_Digg_Image";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
  width: number | null;
  height: number | null;
}

export interface MediaBlock_media_dataportal_Digg_Video {
  __typename: "dataportal_Digg_Video";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export interface MediaBlock_media_dataportal_Digg_File {
  __typename: "dataportal_Digg_File";
  url: string;
  alt: string | null;
  name: string | null;
  description: string | null;
  mime: string;
  ext: string;
}

export type MediaBlock_media = MediaBlock_media_dataportal_Digg_Image | MediaBlock_media_dataportal_Digg_Video | MediaBlock_media_dataportal_Digg_File;

export interface MediaBlock {
  __typename: "dataportal_Digg_MediaBlock";
  heading: string | null;
  description: string | null;
  media: MediaBlock_media;
}
