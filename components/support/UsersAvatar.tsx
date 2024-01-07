import { Avatar, AvatarGroup } from '@nextui-org/avatar';

const UsersAvatar = () => {
  return (
    <AvatarGroup isBordered className="pt-unit-xl">
      {[...Array(4)].map((_, index) => (
        <Avatar key={index + 100} src={`/images/user${index + 1}.png`} />
      ))}
    </AvatarGroup>
  );
};

export default UsersAvatar;
