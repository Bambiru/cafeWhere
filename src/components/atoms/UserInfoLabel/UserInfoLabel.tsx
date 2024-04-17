interface UserInfoLabel {
  id: string;
  label: string;
}

function UserInfoLabel({ id, label }: UserInfoLabel) {
  return (
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
  );
}

export default UserInfoLabel;