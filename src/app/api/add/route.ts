

import { NextResponse } from 'next/server'
import { addPassage } from "@/service/admin/read";

export async function POST(request: Request) {
		console.log('hitting here')
			const { date, problem } = await request.json();
		await addPassage(date, problem);
		
  return NextResponse.json({status: 200,
	body: {
	message: 'success',
}})
}



// export async function POST(request: Request) {


// }