import Image from 'next/image';
import type { StaffMember } from '@/types';

interface StaffCardProps {
  member: StaffMember;
}

export default function StaffCard({ member }: StaffCardProps): React.JSX.Element {
  // Generate initials from name for placeholder avatar
  const initials =
    member.name
      .split(' ')
      .filter((n) => n !== 'To' && n !== 'Be' && n !== 'Added')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '?';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-warm-gray-200/70 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-float hover:ring-forest-green-200">
      {/* Portrait — name and title sit on the photo, editorial style */}
      <div className="relative aspect-square overflow-hidden bg-forest-green-50">
        {member.photo ? (
          <>
            <Image
              src={member.photo}
              alt={member.photoAlt?.trim() || member.name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/85 via-forest-green-900/10 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest-green-100 to-forest-green-200">
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-forest-green-500 shadow-lift">
              <span className="font-serif text-2xl font-bold text-white">{initials}</span>
            </div>
            <p className="text-xs font-medium text-forest-green-500">Photo coming soon</p>
          </div>
        )}

        {member.photo && (
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="mb-2 h-0.5 w-8 origin-left rounded-full bg-amber-400 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150" />
            <h3 className="font-serif text-xl font-bold text-white">{member.name}</h3>
            <p className="text-sm font-semibold text-amber-300">{member.title}</p>
          </div>
        )}
      </div>

      {/* Bio */}
      <div className="flex flex-1 flex-col p-6">
        {!member.photo && (
          <>
            <h3 className="font-serif text-lg font-bold text-forest-green-900">{member.name}</h3>
            <p className="mb-3 text-sm font-semibold text-amber-600">{member.title}</p>
          </>
        )}
        <p className="text-sm leading-relaxed text-warm-gray-500">{member.bio}</p>
      </div>
    </article>
  );
}
