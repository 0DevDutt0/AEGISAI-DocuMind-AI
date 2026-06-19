import logging
from opentelemetry import trace
from opentelemetry.exporter.prometheus import PrometheusMetricReader
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.trace import TracerProvider

class Observability:
    def __init__(self):
        # Setup tracing
        trace.set_tracer_provider(TracerProvider())
        self.tracer = trace.get_tracer(__name__)

        # Setup metrics
        metric_reader = PrometheusMetricReader()
        meter_provider = MeterProvider(metric_readers=[metric_reader])
        from opentelemetry.sdk.metrics import set_meter_provider
        set_meter_provider(meter_provider)

        # Setup logging
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)