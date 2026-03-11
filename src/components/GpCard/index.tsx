import { getGp } from '@/app/gps/data'
import { Flag } from '@/components/Flag'

type TGpCard = React.HTMLAttributes<HTMLDivElement> & {
	gpId: number
}

export async function GpCard({ gpId, ...props }: TGpCard) {
	const gp = await getGp(gpId)

	return (
		<div {...props}>
			<p>Next GP</p>
			<pre>{JSON.stringify(gp, null, 2)}</pre>

			<div className="flex gap-2">
				<Flag countryCode={gp?.country_code} />
				{gp?.gp}. {gp?.city_name}
			</div>

			<div>
				{gp?.start_date?.toLocaleDateString('sv-SE', { dateStyle: 'short' })}
			</div>
			<div>{gp?.wild_card_name}</div>
		</div>
	)
}
