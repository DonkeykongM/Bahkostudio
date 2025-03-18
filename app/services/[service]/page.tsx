import { serviceData } from "@/lib/service-data";
import ServicePageClient from "@/components/service-page-client";

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceId = params.service;
  const service = serviceData[serviceId];

  return <ServicePageClient serviceId={serviceId} service={service} />;
}