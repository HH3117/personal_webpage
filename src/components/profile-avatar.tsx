type ProfileAvatarProps = {
  mood?: 'academic' | 'personal'
  className?: string
}

export function ProfileAvatar({
  mood = 'academic',
  className = '',
}: ProfileAvatarProps) {
  return (
    <div
      <img src="/headshot.png" alt="Hao Hao" />
    </div>
  )
}
