for lang in csharp go java powershell python swift typescript; do
  autorest --input-file=petshop.json  --$lang --output-folder=$lang/ --namespace=estuary
done
