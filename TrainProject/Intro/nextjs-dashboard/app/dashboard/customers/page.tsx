import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({searchParams,}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    // Récupérer les données des clients filtrés
    const customers = await fetchFilteredCustomers(query);

    return (
        <div className="w-full">
            <CustomersTable customers={customers} />
        </div>
    );
}
