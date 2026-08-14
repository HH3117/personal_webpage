type ProfileAvatarProps = {
  mood?: 'academic' | 'personal'
  className?: string
}

export function ProfileAvatar() {
  return (
    <div className="profile-avatar">
      <img src="/headshot.png" alt="Hao Hao" />
    </div>
  )
}
