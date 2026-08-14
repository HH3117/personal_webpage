type ProfileAvatarProps = {
  mood?: 'academic' | 'personal'
  className?: string
}

export function ProfileAvatar() {
  return (
    <div className="profile-avatar">
      <img src="/photo.JPG" alt="Hao Hao" />
    </div>
  )
}
