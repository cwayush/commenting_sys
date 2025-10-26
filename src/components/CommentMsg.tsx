export const CommentMsg = ({ selectedUser }) => {
  return (
    <p className="text-sm text-muted-color mt-2">
      Commenting as{' '}
      <span className="text-muted-color">{selectedUser.name}</span> from{' '}
      <span className="text-muted-color">{selectedUser?.company?.name}</span>
    </p>
  );
};
