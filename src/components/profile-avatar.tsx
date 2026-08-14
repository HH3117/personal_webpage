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
      className={`profile-avatar profile-avatar--${mood} ${className}`}
      role="img"
      aria-label="Portrait placeholder for Maya Chen"
    >
      <svg viewBox="0 0 320 390" aria-hidden="true">
        <path className="avatar-backdrop" d="M20 30h280v330H20z" />
        <circle className="avatar-sun" cx="244" cy="85" r="50" />
        <path
          className="avatar-hair"
          d="M84 174c0-79 35-126 79-126 58 0 87 49 83 128-3 66-27 102-85 103-53 1-77-38-77-105Z"
        />
        <ellipse className="avatar-face" cx="164" cy="151" rx="60" ry="76" />
        <path className="avatar-neck" d="M139 206h48v69h-48z" />
        <path
          className="avatar-shirt"
          d="M55 353c6-75 45-111 108-111 66 0 105 36 111 111H55Z"
        />
        <path className="avatar-collar" d="m121 248 42 37 43-37-18-13-25 18-24-18Z" />
        <path className="avatar-eye" d="M129 145c9-7 18-7 27 0M177 145c9-7 18-7 27 0" />
        <path className="avatar-smile" d="M145 184c13 9 26 9 39 0" />
        <path className="avatar-glasses" d="M111 139h48v29h-48zm57 0h48v29h-48zm-9 8h9" />
      </svg>
      <span className="avatar-caption">Portrait / replace me</span>
    </div>
  )
}
