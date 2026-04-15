import Image from 'next/image';
import type { StaffMember } from '@/types';

interface StaffCardProps {
  member: StaffMember;
}

export default function StaffCard({ member }: StaffCardProps): React.JSX.Element {
  // Generate initials from name for placeholder avatar
  const initials = member.name
    .split(' ')
    .filter((n) => n !== 'To' && n !== 'Be' && n !== 'Added')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '?';

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden text-center group">
      {/* Photo / Avatar */}
      <div className="aspect-square bg-forest-green-50 relative overflow-hidden">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest-green-100 to-forest-green-200">
            <div className="w-20 h-20 rounded-full bg-forest-green-500 flex items-center justify-center mb-3">
              <span className="text-white text-2xl font-bold">{initials}</span>
            </div>
            <p className="text-forest-green-400 text-xs font-medium">Photo coming soon</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-forest-green-900 mb-1">{member.name}</h3>
        <p className="text-amber-600 text-sm font-semibold mb-3">{member.title}</p>
        <p className="text-warm-gray-500 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}
