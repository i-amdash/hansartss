import { Painting } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/paintings`;

const getPainting = async (id: string): Promise<Painting> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getPainting;
