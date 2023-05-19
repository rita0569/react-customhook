import { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  const { name, email, address } = user;

  const style = {
    border: "solid 1px #cc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{name}</dd>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>住所</dt>
        <dd>{address}</dd>
      </dl>
    </div>
  );
};
